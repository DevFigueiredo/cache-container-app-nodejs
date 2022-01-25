import { Store } from '../../../../shared/domain/store'
import { NotFoundError } from '../../../../shared/errors/not-found-error'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IUploadImage } from '../../../../shared/protocols/repositories/uploadImage'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class UpdateStoresUseCase implements IUseCase<Store, Store, void> {
  private readonly storeRepository: IRepository<Store>
  private readonly uploadImage: IUploadImage

  constructor ({ storeRepository, uploadImage }: any) {
    this.storeRepository = storeRepository
    this.uploadImage = uploadImage
  }

  async execute ({ entity, params }: IExecuteUseCase<Store, Store>): Promise<void> {
    if (!params) {
      throw new NotFoundError('Params where to update is required')
    }
    await this.uploadImageBase64(entity)
    await this.storeRepository.update(entity, { where: params })
  }

  private async uploadImageBase64 (entity: Store): Promise<void> {
    if (entity.imageBase64) {
      const { imageURL } = await this.uploadImage.uploadImageBase64('stores', 'store', entity.imageBase64)
      entity.imageURL = imageURL
    }
    delete entity.imageBase64
  }
}
