package core.config;

import core.CustomLogger;
import java.io.File;
import java.util.Properties;

public abstract class BaseConfig {
    private Properties properties;
    private static final CustomLogger log = new CustomLogger();
    public BaseConfig() {
    }

    private String getSystemProperty(String key) {
        return System.getProperty(key);
    }

    private String getValuePipeline(String propName, String defaultValue) {
        String systemProperty = this.getSystemProperty(propName);
        String localProperty = this.getPropertyValue(propName);
        if (systemProperty != null) {
            return systemProperty;
        } else {
            return localProperty != null ? localProperty : defaultValue;
        }
    }

    private String getPropertyValue(String key) {
        return this.properties.getProperty(key);
    }

    public void initProperties(String propertiesFile) {
        if (this.properties == null) {
            if (!(new File(propertiesFile)).exists()) {
                log.info(String.format("Please copy property file into path '%s'", propertiesFile));
            }
            this.properties = PropertyFileReader.getInstance().getProperties(propertiesFile);
        }

    }

    public String getValuePipeline(String propName) {
        return this.getValuePipeline(propName, this.getPropertyValue(propName));
    }

}

