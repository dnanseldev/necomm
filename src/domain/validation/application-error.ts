export class InvalidDescritionError extends Error
{
    constructor(message: string) {
        super(`InvalidDescriptionError: ${message}`)
    }
}

//module.exports = InvalidDescritionError