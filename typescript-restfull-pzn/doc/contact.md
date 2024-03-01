# Contact API Spec

## Create Contact

Endpoint: `POST` /api/contacts

Request Header:

-  X-API-TOKEN: token(uuid)

Request Body:

```json
{
   "first_name": "Adi",
   "last_name": "Nugraha Putra",
   "email": "jujutsuthecode@gmail.com",
   "phone": "081234567890"
}
```

Response Body (Success):

```json
{
   "data": {
      "id": 1,
      "first_name": "Adi",
      "last_name": "Nugraha Putra",
      "email": "jujustsuthecode@gmail.com",
      "phone": "081234567890"
   }
}
```

Response Body (Failed):

```json
{
   "error": "First name must not blank, Last name must not blank, Email must not blank, Phone must not blank..."
}
```

## Get Contact

Endpoint: `GET` /api/contacts/:id

Request Header:

-  X-API-TOKEN: token(uuid)

Response Body (Success):

```json
{
   "data": {
      "id": 1,
      "first_name": "Adi",
      "last_name": "Nugraha Putra",
      "email": "jujustsuthecode@gmail.com",
      "phone": "081234567890"
   }
}
```

Response Body (Failed):

```json
{
   "error": "Contact not found..."
}
```

## Update Contact

Endpoint: `PUT` /api/contacts/:id

Request Header:

-  X-API-TOKEN: token(uuid)

Request Body:

```json
{
   "first_name": "Adi",
   "last_name": "Nugraha Putra",
   "email": "jujustsuthecode@gmail.com",
   "phone": "0999999999999" // updated phone number
}
```

Response Body (Success):

```json
{
   "data": {
      "first_name": "Adi",
      "last_name": "Nugraha Putra",
      "email": "jujustsuthecode@gmail.com",
      "phone": "081234567890"
   }
}
```

Response Body (Failed):

```json
{
   "errors": "Contact not found..."
}
```

## Remove Contact

Endpoint: `DELETE` /api/contacts/:id

Request Header:

-  X-API-TOKEN: token(uuid)

Response Body (Success):

```json
{
   "data": "OK"
}
```

Response Body (Failed):

```json
{
   "errors": "Contact not found..."
}
```

## Search Contact

Endpoint: `POST` /api/contacts

Request Header:

-  X-API-TOKEN: token(uuid)

Request Body:

```json
{}
```

Response Body (Success):

```json
{}
```

Response Body (Failed):

```json
{}
```
