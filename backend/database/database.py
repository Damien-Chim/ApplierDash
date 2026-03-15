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

def add_to_database(application):
    try:
        conn = psycopg2.connect(database="postgres", user="postgres", password="Damienchim123", host="localhost", port=5432)
        curs = conn.cursor(cursor_factory=RealDictCursor)
        
        application = dict(application)
        query = """
            INSERT INTO Applications (company, location, role, notes)
            VALUES (%s, %s, %s, %s);

            SELECT * FROM Applications ORDER BY timestamp DESC LIMIT 1
            """
        
        curs.execute(
            query, (
                application['company'], 
                application['location'],
                application['role'],
                application['notes']
            )
        )
        
        new_application = curs.fetchone()
        conn.commit()
        return new_application

    except Exception as e:
        print("Error" + e)

    finally:
        curs.close()
        conn.close()

def delete_entry(delete_key):
    try:
        conn = psycopg2.connect(database="postgres", user="postgres", password="Damienchim123", host="localhost", port=5432)
        curs = conn.cursor(cursor_factory=RealDictCursor)
        
        application_dict = dict(delete_key)
        query = """
            DELETE FROM Applications WHERE application_id = %s;

            SELECT * FROM Applications;
            """
        
        curs.execute(query, [application_dict['application_id']])
        result = curs.fetchall()
        conn.commit()
        return result
    
    except Exception as e:
        print("Error" + e)

    finally:
        curs.close()
        conn.close()