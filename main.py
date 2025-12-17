import streamlit as st 
import langchain
from langchain_google_genai import GoogleGenerativeAI,ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os 
load_dotenv()
os.environ['GOOGLE_API_KEY']=os.getenv('gemini')

st.title("website automation")

prompt =st.text_area('describe your website template')

if st.button('generate'):
    message=[('system','''you are an expert in web development mainly in frontend, so you need to genereate a code 
              for html css and js based on the user prompt 
              the output of the code should be in below format :
              --html-- 
              html code 
              --html-- 
              --css--
              css code 
              --css-- 
              --js-- 
              js code 
              --js--''')]
    message.append(('user',prompt))
    model = ChatGoogleGenerativeAI(model='gemini-2.5-flash-lite')
    response=model.invoke(message)

    with open('index.html','w') as file:
        file.write(response.content.split('--html--')[1])
    with open('style.css','w') as file:
        file.write(response.content.split('--css--')[1])
    with open('script.js','w') as file:
        file.write(response.content.split('--js--')[1])
    
    st.write('success')