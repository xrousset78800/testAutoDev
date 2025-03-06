from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), unique=True)

class Publication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'))
    publication_type = db.Column(db.Enum('private-sale', 'rental'), nullable=False)
    description = db.Column(db.Text())
    price = db.Column(db.DECIMAL(precision=10, scale=2), nullable=False)

class Tracking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    publication_id = db.Column(db.Integer, db.ForeignKey('publication.id'))
    viewed_at = db.Column(db.DateTime(), default=db.func.current_timestamp())