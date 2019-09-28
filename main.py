from flask import Flask, send_file
from flask_restful import Resource, Api, reqparse

import firebase_admin
from firebase_admin import firestore, credentials

import csv

cred = credentials.Certificate('creds.private.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

collection_ref = db.collection(u'subs')

app = Flask(__name__)
api = Api(app)


class FilesRoute(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('country', required=True)
        # parser.add_argument('country2', required=True)
        args = parser.parse_args()
        if args['country']:
            docs = collection_ref.where(
                u'country', u'==', args['country']).stream()
            # writer.writeheader()
            with open('results.csv', 'w+', newline='') as outfile:
                keys = ['age', 'num_others', 'country', 'date', 'retaliation_others', 'gender',
                        'employment_status', 'notes', 'f_self', 'primary_language', 'id_type', 'disipline', 'f_others']
                outfile_csv = csv.DictWriter(
                    outfile, delimiter=',', fieldnames=keys)
                for doc in docs:
                    outfile_csv.writerow(doc.to_dict())
            return send_file('results.csv')


api.add_resource(FilesRoute, '/get-file')

app.run(host='0.0.0.0', port=5000, debug=True)
