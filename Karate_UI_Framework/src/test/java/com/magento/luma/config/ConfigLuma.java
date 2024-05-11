package com.magento.luma.config;

import core.config.BaseConfig;

public class ConfigLuma extends BaseConfig {

    private static final String PRODUCT_PROPERTIES_FILE = "src/test/resources/product.properties";

    private static final ConfigLuma instance = init();

    public ConfigLuma() {

    }

    public static ConfigLuma getInstance() {
        return instance;
    }

    private static ConfigLuma init() {
        ConfigLuma prodConfig = new ConfigLuma();
        prodConfig.initProperties(PRODUCT_PROPERTIES_FILE);
        return prodConfig;
    }

    public final String UI_USERNAME() {return this.getValuePipeline("ui.username");}

    public final String UI_PASSWORD() {return this.getValuePipeline("ui.password");}

    public final String UI_WRONGPASSWORD() {return this.getValuePipeline("ui.wrongpassword");}


}
