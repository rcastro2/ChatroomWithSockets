from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@socketio.on('message2')
def connect_handler(message):
    print(message)
    emit('message2', str(message), broadcast=True )

if __name__ == '__main__':
    socketio.run(app, port=5000, log_output=False, debug=True)
