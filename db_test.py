from faker import Faker
import random
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate('./codeforgood.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

collection = db.collection('subs')

arr = []

template = [
'age',
'country',
'date',
'disipline',
'employment_status',
'f_others',
'f_self',
'gender',
'id_type',
'notes',
'num_others',
'primary_lanugage',
'num_others',
'retaliation_others',
'sensitivity',
'retaliation_self',
'source',
'y_y_sensor'
]

discipline_list = [
'humanities',
'social science',
'natural sciences',
'engineering',
'computer science'
]

employment = [
'tenure',
'full-time',
'adjunct',
'part-time'
]

frequency = [
'all the time',
'never',
'frequently',
'sometimes'
]

genders = [
'M',
'F',
]

choices = [
'yes',
'no',
'not sure'
]

languages = [
'english',
'arabic',
'spanish',
'french',
]

professions = [
'professional peers',
'university',
'home country government',
'society',
'not sure'
]
def date_generator():
    date = random.randint(2005, 2019)
    date_string = str(date)
    date_string += '-'
    date = random.randint(1, 12)
    date_string += str(date)
    date_string += '-'
    date = random.randint(1, 30)
    date_string += str(date)
    return date_string


country_list  = ['USA', 'Iran', 'South Korea', 'Canda', 'Morocco', 'Turkey', 'Syria']


outputters = []
for i in range(0, 1000):
    output = {}
    output['age'] = random.randint(15, 90)
    output['country'] = random.choice(country_list)
    output['date'] = date_generator()
    output['disipline'] = random.choice(discipline_list)
    output['employment_status'] = random.choice(employment)
    output['f_others'] = random.choice(frequency)
    output['f_self'] = random.choice(frequency)
    output['gender'] = random.choice(genders)
    output['id_type'] = random.choice(professions)
    output['notes'] = 'notes'
    output['num_others'] = random.randint(0, 3)
    output['primary_language'] = random.choice(languages)
    output['num_others'] = random.randint(0, 3)
    output['retaliation_others'] = random.choice(choices)
    collection.document().set(output)

print(outputters)
