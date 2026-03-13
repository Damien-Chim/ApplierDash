import psycopg2
from psycopg2.extras import RealDictCursor

def fetch_database() -> dict:
    try:
        conn = psycopg2.connect(database="postgres", user="postgres", password="Damienchim123", host="localhost", port=5432)
        curs = conn.cursor(cursor_factory=RealDictCursor)
        curs.execute(
            "SELECT * FROM Applications"
        )

        return curs.fetchall()

    except Exception as e:
        print("Error" + e)

    finally:
        curs.close()
        conn.close()

fetch_database()