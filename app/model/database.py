from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
#postgresql://postgres:Imisioluwa234.@localhost:5432/Backend
database = 'postgresql://bxhkhesc:5JKTGbDklfd22LpC6yK_vXrKi5TxZLvD@flora.db.elephantsql.com/bxhkhesc'
engine = create_engine(database)
begin = sessionmaker(bind=engine, autoflush=False, autocommit=False)
data = declarative_base()
