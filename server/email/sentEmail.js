import nodeMailer from 'nodemailer'

module.exports = async () => {
    try {
        const transporter = nodeMailer.createTransport({
            host
        })
    } catch (error) {
        
    }
}