const prod = process.env.NODE_ENV ==="Production"

module.exports={
    'process.env.BASE_URL': prod ?'https://prajwalpradhan.herokuapp.com': 'http://localhost:3000',
    'process.env.NAMESPACE':'https://prajwalpradhan.herokuapp.com',
    'process.env.CLIENT_ID':'47xV0ZaMLOsnR8nKg5VbzJrqcp0Tn958'
}