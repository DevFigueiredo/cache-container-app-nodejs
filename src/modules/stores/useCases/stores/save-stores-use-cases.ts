import { Store } from '../../../../shared/domain/store'
import { generateUUID } from '../../../../shared/helpers/generateUUID'
import { IRepository, IRepositoryCache } from '../../../../shared/protocols/repositories/repositories'
import { IUploadImage } from '../../../../shared/protocols/repositories/uploadImage'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class SaveStoresUseCase implements IUseCase<Store, undefined, void> {
  private readonly storeRepository: IRepository<Store>
  private readonly uploadImage: IUploadImage
  private readonly storeCacheRepository: IRepositoryCache<string, Store>

  constructor ({ storeRepository, storeCacheRepository, uploadImage }: any) {
    this.storeCacheRepository = storeCacheRepository
    this.storeRepository = storeRepository
    this.uploadImage = uploadImage
  }

  async execute ({ entity }: IExecuteUseCase<Store, undefined>): Promise<void> {
    entity.id = generateUUID()
    await this.uploadImageBase64(entity)
    await this.storeRepository.save(entity)
    await this.storeCacheRepository.save(entity.id, entity)
  }

  private async uploadImageBase64 (entity: Store): Promise<void> {
    if (entity.imageBase64) {
      const { imageURL } = await this.uploadImage.uploadImageBase64('stores', 'store-', entity.imageBase64)
      entity.imageURL = imageURL
    }
    delete entity.imageBase64
  }
}
