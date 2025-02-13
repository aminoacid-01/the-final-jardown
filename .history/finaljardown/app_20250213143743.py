from flask import Flask, jsonify
import random

app = Flask(__name__)

vowels = ['a', 'e', 'i', 'o', 'u']
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

@app.route('/random-vowel', methods=['GET'])
def random_vowel():
    return jsonify(random.choice(vowels))

@app.route('/random-consonant', methods=['GET'])
def random_consonant():
    return jsonify(random.choice(consonants))

if __name__ == '__main__':
    app.run(debug=True)