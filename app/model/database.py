import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

load_dotenv()

# DATABASE_URL = os.getenv('DATABASE_URL')
DATABASE_URL = 'postgresql://postgres:Imisioluwa234.@localhost/Backend'
engine = create_engine(DATABASE_URL)
begin = sessionmaker(bind=engine, autoflush=False, autocommit=False)
data = declarative_base()
