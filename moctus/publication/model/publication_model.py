# publication_model.py
class Publication:
    def __init__(self):
        self.id = None
        self.title = 
        self.description = 
        self.price = 0.00
        self.type = vente_privee
        self.photo_url = 
        self.video_url = 

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'type': self.type,
            'photo_url': self.photo_url,
            'video_url': self.video_url
        }
