import React, { useState } from 'react'

const WalletForm = ({ setBalance }) => {
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        setBalance(prevState => parseInt(prevState) + parseInt(amount))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Wallet:
                <input type='number' name='amount' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                <button type='submit'>Submit</button>
            </label>
        </form>
    )
}

export default WalletForm
