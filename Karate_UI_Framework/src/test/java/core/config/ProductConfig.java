package core.config;

public class ProductConfig extends BaseConfig {

    private static final String PRODUCT_PROPERTIES_FILE = "src/test/resources/product.properties";
    private static final ProductConfig instance = init();

    public static ProductConfig getInstance() {
        return instance;
    }

    private static ProductConfig init() {
        ProductConfig prodConfig = new ProductConfig();
        prodConfig.initProperties(PRODUCT_PROPERTIES_FILE);
        return prodConfig;
    }

    public final String PROJECT_NAME() {
        return getValuePipeline("project.name");
    }

}
