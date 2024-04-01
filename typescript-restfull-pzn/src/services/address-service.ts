import { Address, User } from "@prisma/client"

import { prismaClient } from "@/application/database"
import { ContactService } from "@/services/contact-service"
import {
    AddressResponse,
    CreateAdressRequest,
    GetAddressRequest,
    toAddressResponse,
    updateAddressRequest,
} from "@/model/address-model"
import { Validation } from "@/validation/validation"
import { AddressValidation } from "@/validation/address-validation"
import { ResponseError } from "@/error/response-error"

export class AddressService {
    static async create(user: User, request: CreateAdressRequest): Promise<AddressResponse> {
        const createRequest = Validation.validate(AddressValidation.CREATE, request)
        await ContactService.checkContactMustExist(user.username, request.contact_id)

        const address = await prismaClient.address.create({
            data: createRequest as any,
        })

        return toAddressResponse(address)
    }

    static async get(user: User, request: GetAddressRequest): Promise<AddressResponse> {
        const getRequest = Validation.validate(AddressValidation.GET, request)
        await ContactService.checkContactMustExist(user.username, request.contact_id)

        const address = await this.checkAddressMustExist(getRequest.contact_id, getRequest.id)

        if (!address) throw new ResponseError(404, "Address not found")

        return toAddressResponse(address)
    }

    // TODO: REUSABLE FUNCTION
    static async checkAddressMustExist(contactId: number, addressId: number): Promise<Address> {
        const address = await prismaClient.address.findFirst({
            where: {
                id: addressId,
                contact_id: contactId,
            },
        })

        if (!address) throw new ResponseError(404, "Address is not found")

        return address
    }

    static async update(user: User, request: updateAddressRequest): Promise<AddressResponse> {
        const updateRequest = Validation.validate(AddressValidation.UPDATE, request)
        await ContactService.checkContactMustExist(user.username, request.contact_id)
        await this.checkAddressMustExist(updateRequest.contact_id, updateRequest.id)

        const address = await prismaClient.address.update({
            where: {
                id: updateRequest.id,
                contact_id: updateRequest.contact_id,
            },
            data: updateRequest,
        })

        return toAddressResponse(address)
    }
}
