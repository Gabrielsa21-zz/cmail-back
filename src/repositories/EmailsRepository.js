export class EmailsRepository {
    
    constructor(emails){
        this.emails = emails;
    }

    create = (email) => {
        return this.emails.create(email)
    }


    getAllEmailsBySender = (sender) => {
        return this.emails.findAll({
            where: {
                from: sender
            }
        })
        .then((emailsFound) => {
            const hasEmails = emailsFound.length
            if (hasEmails) {
                return emailsFound
            }
            throw new Error(`Emails from sender ${sender} not found`)
        })
    }

}