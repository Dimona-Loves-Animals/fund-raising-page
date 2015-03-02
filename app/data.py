from flask.ext.babel import gettext

def AREAS():
    return [
	gettext("area1"),
        gettext("area2"),
        gettext("area3"),
        gettext("area4"),
        gettext("area5"),
        gettext("area6"),
        gettext("area7"),
        gettext("area8"),
        gettext("area9"),
        gettext("area10"),
    ]

def ITEMS():
    return [
        {'price':1, 'text':gettext("item1"), 'image':""},
        {'price':2, 'text':gettext("item2"), 'image':""},
        {'price':5, 'text':gettext("item3"), 'image':""},
        {'price':10, 'text':gettext("item4"), 'image':""},
        {'price':15, 'text':gettext("item5"), 'image':""},
        {'price':20, 'text':gettext("item6"), 'image':""},
        {'price':25, 'text':gettext("item7"), 'image':""},
        {'price':30, 'text':gettext("item8"), 'image':""},
        {'price':40, 'text':gettext("item9"), 'image':""},
        {'price':50, 'text':gettext("item10"), 'image':""},
        {'price':75, 'text':gettext("item11"), 'image':""},
        {'price':100, 'text':gettext("item12"), 'image':""},
        {'price':150, 'text':gettext("item13"), 'image':""},
        {'price':200, 'text':gettext("item14"), 'image':""},
        {'price':300, 'text':gettext("item15"), 'image':""},
        {'price':350, 'text':gettext("item16"), 'image':""},
        {'price':500, 'text':gettext("item17"), 'image':""},
        {'price':700, 'text':gettext("item18"), 'image':""},
        {'price':1000, 'text':gettext("item19"), 'image':""},
        {'price':1500, 'text':gettext("item20"), 'image':""},
        {'price':2000, 'text':gettext("item21"), 'image':""},
    ]