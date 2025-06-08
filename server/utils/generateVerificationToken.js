import crypto from 'crypto'

export const generateVerificationToken = () => Math.floor(100000 + Math.random() * 900000)