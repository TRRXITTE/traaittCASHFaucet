/*
    This file is part of XeniumFaucet.

    XeniumFaucet is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    XeniumFaucet is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with XeniumFaucet.  If not, see <https://www.gnu.org/licenses/>.
*/

module.exports = {
	// Filenames for the databases
	databases: {
		transactions: 'transactions.db',
		addresses: 'addresses.db'
	},

	// WalletAPI configuration
	wallet: {
		// Set openWallet to true if it should open the wallet configured
		openWallet: true,

		// The wallet to open
		walletToOpen: {
			filename: 'faucet',
			password: 'faucet',
			daemon: {
				host: '127.0.0.1',
				port: 14486
			}
		},

		// The server the wallet API is running on
		host: '127.0.0.1',
		port: 8447,

		// Password for the wallet API
		password: 'faucet',

		// Coin configuration
		defaultUnlockTime: 8,
		defaultMixin: 3,
		decimalPlaces: 8,
		decimalDivisor: 10 ** 8, // 10 to the power of decimalPlaces
		defaultFee: 0.00000010
	},

	// Google reCaptcha v2 configuration
	recaptcha: {
		// Set to true if reCaptcha should be enabled
		enabled: true,

		// Credentials from reCaptcha's Admin Console
		siteKey: '6LeLF7ohAAAAAP5bgGT5rnxf2Vc9s5sgcHA2mK9V',
		secretKey: '6LeLF7ohAAAAAGwWkZQMACJKS1lwbC3p77hCSrEo'
	},

	// Backend configuration
	faucet: {
		// The port where the faucet should run on
		port: 8080,

		// The minimum amount of coins to be sent (in atomic units)
		minimumCoinsToBeSent: 1000,

		// The maximum amount of coins to be sent (in atomic units)
		maximumCoinsToBeSent: 100000,

		// Address validation
		walletAddressLength: 98,
		walletAddressStartsWith: 'cash',

		// Coins are claimable every this many milliseconds
		claimableEvery: 1 * 60 * 60 * 1000 // 24 hours
	},

	// Frontend configuration
	frontend: {
		// Coin configuration for the frontend
		coinName: 'traaittCASH',
		ticker: 'XTCASH',

		// Coin claiming interval as a string
		claimableEvery: '1 hours',

		// The person this faucet is run by, with Discord Tag
		faucetOwner: 'TRRXITTE Int., incorporate',
		faucetOwnerDiscord: 'тяяхiтте#0880'
	}
}
