package core.config;

public class RunConfig extends BaseConfig {

    private static final RunConfig instance = init();
    private static final String PROPERTIES_FILE = "src/test/resources/run.properties";

    public static RunConfig getInstance() {
        return instance;
    }

    private static RunConfig init() {
        RunConfig runConfig = new RunConfig();
        runConfig.initProperties(PROPERTIES_FILE);
        return runConfig;
    }

    public final int THREAD_COUNT() {
        return Integer.parseInt(getValuePipeline("thread.count"));
    }

    public final int RERUN_COUNT() {
        return Integer.parseInt(getValuePipeline("rerun.enumeration"));
    }

    public final boolean IS_RERUN() {
        return Boolean.parseBoolean(getValuePipeline("skip.rerun.failed.tests"));
    }

    public final String RERUN_PATH() {
        return getValuePipeline("rerun.path");
    }

    public final boolean RERUN_PARALLEL() {
        return Boolean.parseBoolean(getValuePipeline("rerun.parallel"));
    }

    public final String BROWSER_NAME() {
        return getValuePipeline("browser.name");
    }
    //</editor-fold>


}
