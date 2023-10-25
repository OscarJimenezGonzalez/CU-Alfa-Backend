
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

METHOD | ENDPOINT                | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                     | RETURNS
-------|-------------------------|-------|------|-----------------------|-------------------------------------------------|--------------------
GET    | /community/own          | YES   | user  | Get own Community    |                                                 |  {community}
GET    | /community              | YES   | admin | Get all Communities  |                                                 |  [{community}]
GET    | /community/:communityId | YES   | admin | Get one Community    |                                                 |  {community}
POST   | /community              | YES   | user  | Create own Community | `body`                                          |  {community}                  
POST   | /community              | YES   | admin | Create one Community | `body`                                          |  {community}
PUT    | /community/own          | YES   | user  | Update own Community | `body`                                          |  {message: 'Own Community updated'}
PUT    | /community/:communityId | YES   | admin | Update one user      | `body`                                          |  {message: 'Community updated'
DELETE | /community/own          | YES   | user  | Delete own user      |                                                 |  {message: 'Own Community deleted'}
DELETE | /community/:communityId | YES   | admin | Delete one user      |                                                 |  {message: 'Community deleted'}


### Supplier_Company Endpoints

METHOD | ENDPOINT                            | TOKEN | ROLE | DESCRIPTION          | POST PARAMS                                               | RETURNS
-------|-------------------------------------|-------|------|-----------------------|----------------------------------------------------------|--------------------
GET    | /supplierCompany/own                | YES   | user  | Get own supplierCompany     |                                                   |  {supplierCompany}
GET    | /supplierCompany                    | YES   | admin | Get all supplierCompany     |                                                   |  [{supplierCompany}]
GET    | /supplierCompany/:supplierCompanyId | YES   | admin | Get one supplierCompany       |                                                 |  {supplierCompany}
POST   | /supplierCompany                    | YES   | admin | Create one supplierCompany    | `body`                                          |  {supplierCompany}
PUT    | /supplierCompany/own                | YES   | user  | Update own supplierCompanyy   | `body`                                          |  {message: 'Own Supplier Company updated'}
PUT    | /supplierCompany/:supplierCompanyId | YES   | admin | Update one supplierCompany    | `body`                                          |  {message: 'Supplier Company updated'}
DELETE | /supplierCompany/own                | YES   | user  | Delete own supplierCompany    |                                                 |  {message: 'Supplier Company deleted'}
DELETE | /supplierCompany/:supplierCompanyId | YES   | admin | Delete one usupplierCompany   |                                                 |  {message: 'Supplier Company deleted'}


### Community_Supplier_Contract Endpoints

METHOD | ENDPOINT                                                  | TOKEN | ROLE  | DESCRIPTION                                                                     | POST PARAMS  | RETURNS
-------|-----------------------------------------------------------|-------|-------|---------------------------------------------------------------------------------|--------------|--------------------
GET    | /communitySupplierContract/own                            | YES   | user  | Get all own communitySupplierContracts                                          |              |  [{communitySupplierContract}]
GET    | /communitySupplierContract                                | YES   | admin | Get all communitySupplierContract                                               |              |  [{communitySupplierContract}]
GET    | /communitySupplierContract/:communitySupplierContract     | YES   | admin | Get one communitySupplierContract                                               |              |  {communitySupplierContract}
POST   | /communitySupplierContract                                | YES   | admin | Create one communitySupplierContract (limit 1 per contract type per community)  | `body`       |  {communitySupplierContract}
POST   | /communitySupplierContract                                | YES   | user  | Create own communitySupplierContract (limit 1 per contract type)                | `body`       |  {communitySupplierContract}
PUT    | /communitySupplierContract/own/:communitySupplierContract | YES   | user  | Update own communitySupplierContract                                            | `body`       |  {message: 'Own CommunitySupplierContract updated'}
PUT    | /communitySupplierContract/:communitySupplierContract     | YES   | admin | Update one communitySupplierContract                                            | `body`       |  {message: 'CommunitySupplierContract updated'}
DELETE | /communitySupplierContract/own/:communitySupplierContract | YES   | user  | Delete own communitySupplierContract                                            |              |  {message: 'Own CommunitySupplierContract deleted'}
DELETE | /communitySupplierContract/:communitySupplierContract     | YES   | admin | Delete one communitySupplierContract                                            |              |  {message: 'CommunitySupplierContract deleted'}


### Supplier_Contract_type Endpoints

METHOD | ENDPOINT                            | TOKEN | ROLE | DESCRIPTION          | POST PARAMS                                             | RETURNS
-------|-------------------------------------|-------|------|----------------------|---------------------------------------------------------|--------------------
GET    | /supplierContractType                         | YES   | admin | Get all supplierContractType       |                                |  [{supplierContractType}]
GET    | /supplierContractType/:SupplierContractTypeId | YES   | admin | Get one supplierContractType       |                                |  {supplierContractType}
POST   | /supplierContractType                         | YES   | admin | Create one supplierContractType    | `body`                         |  {supplierContractType}
PUT    | /supplierContractType/:SupplierContractTypeId | YES   | admin | Update one supplierContractType    | `body`                         |  {message: 'SupplierContractType updated'}
DELETE | /supplierContractType/:SupplierContractTypeId | YES   | admin | Delete one supplierContractType    |                                |  {message: 'SupplierContractType deleted'}

### Supplier_offer Endpoints 

METHOD | ENDPOINT                            | TOKEN | ROLE  | DESCRIPTION                                                  | POST PARAMS                                             | RETURNS
-------|-------------------------------------|-------|-------|--------------------------------------------------------------|---------------------------------------------------------|--------------------
GET    | /supplierOffer/own/:supplierOfferId | YES   | user  | Get one of my own supplierOffers                             |                                                         |  {supplierOffer}
GET    | /supplierOffer/own/all              | YES   | user  | Get all of own supplierOffers                                |                                                         |  [{supplierOffer}]
GET    | /supplierOffer                      | YES   | admin | Get all supplierOffers                                       |                                                         |  [{supplierOffer}]
GET    | /supplierOffer/:supplierOfferId     | YES   | admin | Get one supplierOffer                                        |                                                         |  {supplierOffer}
POST   | /supplierOffer/own                  | YES   | user  | Create one supplierOffer (solo user: 'supplier')             | `body`                                                  |  {supplierOffer}
POST   | /supplierOffer                      | YES   | admin | Create one supplierOffer                                     | `body`                                                  |  {supplierOffer}
PUT    | /supplierOffer/own/:supplierOfferId | YES   | user  | Update one of my own supplierOffers (solo user: 'supplier')  | `body`                                                  |  {message: 'Own Supplier Offer updated'}
PUT    | /supplierOffer/:supplierOfferId     | YES   | admin | Update one supplierOffer                                     | `body`                                                  |  {message: 'Supplier Offer updated'}
DELETE | /supplierOffer/own/:supplierOfferId | YES   | user  | Delete one of my own supplierOffers                          |                                                         |  {message: 'Supplier Offer deleted'}
DELETE | /supplierOffer/:supplierOfferId     | YES   | admin | Delete one supplierOffer                                     |                                                         |  {message: 'Supplier Offer deleted'}


