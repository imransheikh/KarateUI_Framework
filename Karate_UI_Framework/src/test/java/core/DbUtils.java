package core;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DbUtils {

    private static final CustomLogger logger = new CustomLogger();

    public void insert(String userName, String password, String url, String driverClassName, String query) {

        try {
            Class.forName(driverClassName);
            Connection con = DriverManager.getConnection(url, userName, password);
            Statement stmt = con.createStatement();
            stmt.executeUpdate(query);
            con.commit();
            con.close();

        } catch (Exception e) {
            logger.error(String.valueOf(e));
        }
    }


    public static List read(String userName, String password, String url, String driverClassName, String query, int row) {
        List data = new ArrayList();
        logger.info("DBUserName is :" + userName);
        logger.info("DBPassword :" + password);
        logger.info("DBHostname is:" + url);
        logger.info("SQL Query is :" + query);
        logger.info("JDBC driverClassName is  :" + driverClassName);
        try {
            Class.forName(driverClassName);
            Connection con = DriverManager.getConnection(url, userName, password);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                for (int i = 1; i <= row; i++) {
                    logger.info("Data is " + rs.getObject(i).toString());
                    data.add(rs.getObject(i).toString());
                }
            }
            con.close();
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return data;
    }

    public ArrayList<String> read(String userName, String password, String url, String driverClassName, String query) {
        ArrayList<String> data = new ArrayList<>();

        try {
            Class.forName(driverClassName);
            Connection con = DriverManager.getConnection(url, userName, password);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                data.add(rs.getObject(1).toString());
            }

            con.close();
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return data;
    }

    public static String getFirstRow(String userName, String password, String url, String driverClassName, String query, int row) {
        logger.info("Retrieved first row is " + (String) read(userName, password, url, driverClassName, query, row).get(row - 1));
        return (String) read(userName, password, url, driverClassName, query, row).get(row - 1);
    }
    //Imran

}