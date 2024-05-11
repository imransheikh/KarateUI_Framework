package core.config;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.jasypt.properties.EncryptableProperties;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertyFileReader {

    private static final String KEY = "If you want to keep a secret, you must also hide it from yourself";
    private static final StandardPBEStringEncryptor ENCRYPTOR = createEncryptor();
    private static PropertyFileReader Instance = new PropertyFileReader();

    private PropertyFileReader() {
    }

    public static PropertyFileReader getInstance() {
        return Instance;
    }

    private static StandardPBEStringEncryptor createEncryptor() {
        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
        encryptor.setPassword(KEY);
        return encryptor;
    }

    public Properties getProperties(String propertyFile) {
        Properties properties = new EncryptableProperties(ENCRYPTOR);
        try {
            InputStream fileInput = new FileInputStream(propertyFile);
            properties.load(fileInput);
        } catch (IOException var4) {
            throw new RuntimeException("Unable to find the file");
        }
        return properties;
    }

    public static String encryptString(String toEncrypt) {
        return ENCRYPTOR.encrypt(toEncrypt);
    }



}