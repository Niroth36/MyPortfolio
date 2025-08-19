from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .database import database, engine, metadata
from .models import articles

# Initialize FastAPI and create tables
app = FastAPI()

metadata.create_all(engine)

# Article schema for API requests
class Article(BaseModel):
    title: str
    description: str
    content: str

# Connect to database when the app starts
@app.on_event("startup")
async def startup():
    await database.connect()

# Disconnect when the app stops
@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# Create a new article
@app.post("/articles")
async def create_article(article: Article):
    query = articles.insert().values(
        title = article.title,
        description = article.description,
        content = article.content
    )
    last_record_id = await database.execute(query)
    return {"id": last_record_id, "title": article.title, "description": article.description, "content": article.content}

# Get all articles
@app.get("/articles")
async def get_articles():
    query = articles.select()
    return await database.fetch_all(query)

# Get a single article by ID
@app.get("/articles/{article_id}")
async def get_article(article_id: int):
    query = articles.select().where(articles.c.id == article_id)
    article = await database.fetch_one(query)
    if not article:
        raise HTTPException(status_code = 404, detail = "Article not found")
    return article

@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI backend!"}