from config import db

class Reminders(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    medicine_name = db.Column(db.String(200))
    description = db.Column(db.String(200))
    time = db.Column(db.String(200))
   
    def to_json(self):
        return {
            'id': self.id,
            'medicineName': self.medicine_name,
            'description': self.description,
            'time': self.time
        }

