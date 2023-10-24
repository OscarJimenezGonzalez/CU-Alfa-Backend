```

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `body`                                          | { token: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { token: `token` }


### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION               | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|---------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | admin | Get All Users            | `query params`                                  | [{user}]
GET    | /user/own        | YES   | user  | Get Own Profile          |                                                 | {user}
GET    | /user/:userId    | YES   | user  | Get One User             |                                                 | {user}
POST   | /user            | YES   | admin | Create one user          | `body`                                          | {user}
PUT    | /user/own        | YES   | user  | Update own profile       | `body`                                          | {message: 'Profile updated'}
PUT    | /user/password   | YES   | user  | Reset password           | `newPassword` `repeatPassword`                  | { message: 'Password updated }
PUT    | /user/:userId    | YES   | admin | Update one user          | `body`                                          | {message: 'User updated'
DELETE | /user/:userId    | YES   | admin | Delete one user          |                                                 | {message: 'User deleted'}
DELETE | /user/own        | YES   | user  | Delete own profile       |                                                 | { message: 'Profile deleted' }


### Community Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION          | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|----------------------|-------------------------------------------------|--------------------
GET    | /community/own          | YES   | user  | Get own Community   |                                                 |  {community}
GET    | /community              | YES   | admin | Get all Communities |                                                 |  [{community}]
GET    | /community/:communityId | YES   | admin | Get one Community   |                                                 |  {community}
POST   | /community              | YES   | admin | Create one Community| `body`                                          |  {community}
PUT    | /community/own          | YES   | user  | Update own Community| `body`                                          |  {message: 'Own Community updated'}
PUT    | /community/:communityId | YES   | admin | Update one user     | `body`                                          |  {message: 'Community updated'
DELETE | /community/own          | YES   | user  | Delete own user     |                                                 |  {message: 'Own Community deleted'}
DELETE | /community/:communityId | YES   | admin | Delete one user     |                                                 |  {message: 'Community deleted'}


### Supplier_company Endpoints

METHOD | ENDPOINT                            | TOKEN | ROLE | DESCRIPTION          | POST PARAMS                                             | RETURNS
-------|-------------------------------------|-------|------|----------------------|---------------------------------------------------------|--------------------
GET    | /supplierCompany/own                | YES   | user  | Get own supplierCompany     |                                                 |  {supplierCompany}
GET    | /supplierCompany                    | YES   | admin | Get all supplierCompany     |                                                     |  [{supplierCompany}]
GET    | /supplierCompany/:supplierCompanyId | YES   | admin | Get one supplierCompany       |                                                 |  {supplierCompany}
POST   | /supplierCompany                    | YES   | admin | Create one supplierCompany    | `body`                                          |  {supplierCompany}
PUT    | /supplierCompany/own                | YES   | user  | Update own supplierCompanyy   | `body`                                          |  {message: 'Own Supplier Company updated'}
PUT    | /supplierCompany/:supplierCompanyId | YES   | admin | Update one supplierCompany    | `body`                                          |  {message: 'Supplier Company updated'}
DELETE | /supplierCompany/own                | YES   | user  | Delete own supplierCompany    |                                                 |  {message: 'Supplier Company deleted'}
DELETE | /supplierCompany/:supplierCompanyId | YES   | admin | Delete one usupplierCompany   |                                                 |  {message: 'Supplier Company deleted'}


### Supplier_offer Endpoints

METHOD | ENDPOINT                            | TOKEN | ROLE  | DESCRIPTION                        | POST PARAMS                                             | RETURNS
-------|-------------------------------------|-------|-------|------------------------------------|---------------------------------------------------------|--------------------
GET    | /supplierOffer/own/:supplierOfferId | YES   | user  | Get one of my own supplierOffers   |                                               |  {supplierOffer}
GET    | /supplierOffer/own/all              | YES   | user  | Get all of own supplierOffers      |                                               |  [{supplierOffer}]
GET    | /supplierOffer                      | YES   | admin | Get all supplierOffers             |                                                   |  [{supplierOffer}]
GET    | /supplierOffer/:supplierOfferId     | YES   | admin | Get one supplierOffer              |                                                  |  {supplierOffer}
POST   | /supplierOffer/own                  | YES   | user  | Create one supplierOffer           | `body`                                           |  {supplierOffer}
POST   | /supplierOffer                      | YES   | admin | Create one supplierOffer           | `body`                                           |  {supplierOffer}
PUT    | /supplierOffer/own/:supplierOfferId | YES   | user  | Update on of my own supplierOffer  | `body`                                        |  {message: 'Own Supplier Offer updated'}
PUT    | /supplierOffer/:supplierOfferId     | YES   | admin | Update one supplierOffer           | `body`                                           |  {message: 'Supplier Offer updated'}
DELETE | /supplierOffer/own/:supplierOfferId | YES   | user  | Delete one of my own supplierOffers|                                              |  {message: 'Supplier Offer deleted'}
DELETE | /supplierOffer/:supplierOfferId     | YES   | admin | Delete one supplierOffer           |                                                   |  {message: 'Supplier Offer deleted'}

### SupplierContract_type Endpoints

METHOD | ENDPOINT                            | TOKEN | ROLE | DESCRIPTION          | POST PARAMS                                             | RETURNS
-------|-------------------------------------|-------|------|----------------------|---------------------------------------------------------|--------------------
GET    | /SupplierContractType                         | YES   | admin | Get all SupplierContractType       |                                                     |  [{SupplierContractType}]
GET    | /SupplierContractType/:SupplierContractTypeId | YES   | admin | Get one SupplierContractType       |                                                 |  {SupplierContractType}
POST   | /SupplierContractType                         | YES   | admin | Create one SupplierContractType    | `body`                                          |  {SupplierContractType}
PUT    | /SupplierContractType/:SupplierContractTypeId | YES   | admin | Update one SupplierContractType    | `body`                                          |  {message: 'SupplierContractType updated'}
DELETE | /SupplierContractType/:SupplierContractTypeId | YES   | admin | Delete one SupplierContractType    |                                                 |  {message: 'SupplierContractType deleted'}


```
