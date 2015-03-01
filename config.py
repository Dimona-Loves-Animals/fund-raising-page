# -*- coding: utf-8 -*-

# Use minified htmls rather then the source htmls
PRODUCTION = False
# alias for the opposite of PRODUCTION state
DEVELOPMENT = not PRODUCTION

# Statement for enabling the development environment in flask
DEBUG = not PRODUCTION

# Define the application directory
import os
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
APP_DIR = BASE_DIR + '/app'
VIEWS_DIR = APP_DIR + '/views'
MIN_DIR = APP_DIR + '/build'

PORT = 9091

HOST = '0.0.0.0'

DONATE_AREAS = [
    "area1",
    "area2",
    "area3",
    "area4",
    "area5",
    "area6",
    "area7",
    "area8",
    "area9",
    "area10",
]

ITEMS = [
    {'price':1, 'text':"item1", 'image':""},
    {'price':2, 'text':"item2", 'image':""},
    {'price':5, 'text':"item3", 'image':""},
    {'price':10, 'text':"item4", 'image':""},
    {'price':15, 'text':"item5", 'image':""},
    {'price':20, 'text':"item6", 'image':""},
    {'price':25, 'text':"item7", 'image':""},
    {'price':30, 'text':"item8", 'image':""},
    {'price':40, 'text':"item9", 'image':""},
    {'price':50, 'text':"item10", 'image':""},
    {'price':75, 'text':"item11", 'image':""},
    {'price':100, 'text':"item12", 'image':""},
    {'price':150, 'text':"item13", 'image':""},
    {'price':200, 'text':"item14", 'image':""},
    {'price':300, 'text':"item15", 'image':""},
    {'price':350, 'text':"item16", 'image':""},
    {'price':500, 'text':"item17", 'image':""},
    {'price':700, 'text':"item18", 'image':""},
    {'price':1000, 'text':"item19", 'image':""},
    {'price':1500, 'text':"item20", 'image':""},
    {'price':2000, 'text':"item21", 'image':""},
]