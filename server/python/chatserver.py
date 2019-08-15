from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@socketio.on('message')
def connect_handler(message):
    print(message)
    emit('message', str(message), broadcast=True )

if __name__ == '__main__':
    socketio.run(app, port=5000, log_output=False, debug=True)
