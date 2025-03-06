from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Publication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100), nullable=False)
    photos_videos = db.relationship('Media', backref='publication', lazy=True)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)

class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    publication_id = db.Column(db.Integer, db.ForeignKey('publication.id'), nullable=False)
    file_path = db.Column(db.String(255), nullable=False)

def create_publication(type, description, price):
    publication = Publication(type=type, description=description, price=price)
    db.session.add(publication)
    db.session.commit()
    return publication

def add_media_to_publication(publication_id, file_path):
    media = Media(publication_id=publication_id, file_path=file_path)
    db.session.add(media)
    db.session.commit()

def get_publications():
    return Publication.query.all()

def get_publication_by_id(id):
    return Publication.query.get(id)