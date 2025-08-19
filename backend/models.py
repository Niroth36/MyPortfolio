from sqlalchemy import Table, Column, Integer, String
from .database import metadata

articles = Table(
    'articles',
    metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("title", String, nullable=False),
    Column("description", String, nullable=False),
    Column("content", String, nullable=False),
)