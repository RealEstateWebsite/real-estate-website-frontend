from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

database = 'postgresql://postgres:Imisioluwa234.@localhost:5432/Backend'
engine = create_engine(database)
begin = sessionmaker(bind=engine, autoflush=False, autocommit=False)
data = declarative_base()
