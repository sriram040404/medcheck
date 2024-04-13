from flask import request,jsonify
from config import app,db
from models import Reminders
import csv

@app.route('/reminders', methods=['GET'])
def get_reminders():
    reminders=Reminders.query.all()
    json_reminders=list(map(lambda reminder:reminder.to_json(),reminders))
    return jsonify(json_reminders)

@app.route('/create',methods=['POST'])
def create_reminder():
    medicine_name = request.json.get('medicineName')
    description = request.json.get('description')
    time = request.json.get('time')
    if(not medicine_name or not description or not time):
        return jsonify({'error': 'Please provide all fields'}), 400

    new_reminder = Reminders(medicine_name, description, time)

    try:
        db.session.add(new_reminder)
        db.session.commit()
    except Exception as e:
        return ({"message":str(e)},400)
    
    return jsonify({"message":"Reminder Created Successfully"}),201





if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True) 