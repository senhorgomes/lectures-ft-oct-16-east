### User Stories

- A way to describe a feature to implement in your app
- Drawn from the perspective of a user

- TinyApp - develop an app that shortens urls

- User stories

- As a user, I would like/want to _______  Each user story is typically revolves around one action

- As a user, I would like to shorten my urls
- As a user, I would like to edit my existing urls
- As a user, I would like to be able to store URLs I've already shortened
- As a user, I would like to favourite my urls
- As a user, I would like to be able to login/register (save my information)

Entities:
User
URLs

### ERDs ( Entity Relationship Diagram )

 - type of structural diagram for use in database design.
 - very handy to visualize the flow of data and how its all connected.

 You can use pen and paper to draw these out, which is quick and great!

![Schema](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)


### Primary Key

- A way of uniquely identifying a particular record within a table 
- Must be unique (within the table) and can never be null
- The usual data type is auto-incrementing integer (`INTEGER` or `BIGINT`)
- A Primary Key stored in another table is known as a `Foreign Key`
- The Primary Key and Foreign Key **MUST** be the same data type

### Naming Conventions

- Table and field names are written in `snake_case`
- Table names are always pluralized
- The primary key for each table will simply be called `id`
- A foreign key is made up of the singular of the primary keys table and the suffix `_id` (eg. `user_id` is the foreign key for the `id` field in the `users` table)

### Data Types

- Each field in a table **must** have a data type defined for it
- The data type tells the database how much room to set aside to store the value _and_ allows the database to perform type validation on data before insertion (to protect the data integrity of the table)
- Choosing the perfect data type is less of a concern nowadays because memory is now comparably cheap

INTEGER - number
TEXT - string
BOOLEAN - boolean (true and false)
FLOATS - number
TIMESTAMP - date and time
VARCHAR - string
DECIMAL/CURRENCY

### Relationship Types

- **One-to-One**: One record in the first table is related to one (and only one) record in the second table
- **One-to-Many**: One record in the first table is related to one or more records in the second table
- **Many-to-Many**: One or more records in the first table are related to one or more records in the second table

- It could be argued that there is really only one relationship type: _One-to-Many_ as One-to-One's are extremely rare and Many-to-Many's are implemented using two _One-to-Many's_

### Design Concepts

- Make fields required based on the records state upon initial creation (remember that additional data can be added to a record after it has been created)
- Intelligent default values can be set for fields (such as the current timestamp for a `created_on` field)
- Don't use calculated fields (a field that can be derived from one or more other fields, such as `full_name` is a combination of `first_name` and `last_name`)
- Pull repeated values out to their own table and make reference to them with a foreign key
- Try not to delete anything (use a boolean flag instead to mark a record as active or inactive)
- Consider using a `type` field instead of using two (or more) tables to store very similar data (eg. create an `orders` table with an `order_type` field instead of a `purchase_orders` and a `sales_orders` table)

### Entity Relationship Diagram (ERD)

- A visual depiction of the database tables and how they are related to each other
- Extremely useful for reasoning about how the database should be structured
- Can be created using pen and paper, a whiteboard, or using an online application

### Breakout: Convert Two Spreadsheets
- [Gist with instruction](https://gist.github.com/andydlindsay/20e7305e853bad7b587f294b054cf8de)


### Useful Links
* [Uber](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/uber.png)
* [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)
* [Postgres Data Types](http://www.postgresqltutorial.com/postgresql-data-types/)
* [Relationship Types](http://etutorials.org/SQL/Database+design+for+mere+mortals/Part+II+The+Design+Process/Chapter+10.+Table+Relationships/Types+of+Relationships/)
* [draw.io (online ERD)](https://www.draw.io/)