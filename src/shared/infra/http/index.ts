/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { bootstrapExpress, bootstrapGRPC } from '../../../main/apps/storesApp'

bootstrapExpress().listen(4000, () => console.log(`Server started on port ${4000}`))
bootstrapGRPC(50051, () => console.log(`Server started on port ${50051}`))
// eslint-disable-next-line node/no-path-concat
