""" Configuracion de framework"""
from flask import Flask, render_template, request
app = Flask(__name__)

#HOME PRINCIPAL DE LA PAGINA
@app.route('/')
def home():
    return render_template('index.html')

#EH NADA:V
@app.route('/grafos')
def uno():
    return render_template ('grafos.html')

# ESTE ES EL FORMULARIO DEL AXEL
@app.route('/formulario')
def dos():
    return render_template ('formulario.html')


@app.route('/prueba')
def tres():
    return render_template('prueba.html')

# apretamos el boton enviar y se envia a esto
# Definimos el route con el método POST

@app.route('/mi primer grafo',methods=['POST'])   
def grafo():
    Adyacencia=1
    cantidad_vertices = request.form['cantidad_vertices']
    tipo_grafo = request.form['Tipo_Grafo']

    if Adyacencia==0:
        return cantidad_vertices
    else:
        return tipo_grafo


















if __name__ == '__main__':
    app.run(debug=True)