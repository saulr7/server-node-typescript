import mysql = require('mysql')


export default class Mysql {

  private static _instance: Mysql;

  connection  : mysql.Connection;
  connected   = false;

  constructor() {
    
    console.log('Init')
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Killzone3',
      database: 'docker_db'
    });

    this.connectDB();
    
  }

  public static get instance() {
    return this._instance || ( this._instance = new this() );
  }


  static  execQuery( query : string, callback : Function ) {
    
      this.instance.connection.query(query, (err, results: Object[], fields) => {
        
        if (err) {
          console.log(err)
          return callback( err )
        }

        if (results.length === 0) {
          return  callback( 'No data' )
        }
          
        return callback( null, results )


      } )
  }



  private connectDB() {
    this.connection.connect((err: mysql.MysqlError) => {
      
      if (err) {
        console.log(err.message)
      }

      this.connected = true
      console.log('Online')

    } )
  }

}
