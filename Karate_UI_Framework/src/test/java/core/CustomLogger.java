package core;
import com.intuit.karate.LogAppender;
import org.slf4j.LoggerFactory;
import org.slf4j.helpers.FormattingTuple;
import org.slf4j.helpers.MessageFormatter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;



public class CustomLogger {

    private static final String DEFAULT_PACKAGE = "com.magento.products";
    private final org.slf4j.Logger LOGGER;
    private final DateFormat dateFormatter;
    private LogAppender appender;
    private boolean appendOnly;


    public void setAppender(LogAppender appender) {
        this.appender = appender;
    }

    public LogAppender getAppender() {
        return this.appender;
    }

    public boolean isTraceEnabled() {
        return this.LOGGER.isTraceEnabled();
    }

    public void setAppendOnly(boolean appendOnly) {
        this.appendOnly = appendOnly;
    }

    public boolean isAppendOnly() {
        return this.appendOnly;
    }

    public CustomLogger(Class clazz) {
        this.dateFormatter = new SimpleDateFormat("HH:mm:ss.SSS");
        this.appender = LogAppender.NO_OP;
        this.LOGGER = LoggerFactory.getLogger(clazz);
    }

    public CustomLogger(String name) {
        this.dateFormatter = new SimpleDateFormat("HH:mm:ss.SSS");
        this.appender = LogAppender.NO_OP;
        this.LOGGER = LoggerFactory.getLogger(name);
    }

    public CustomLogger() {
        this("com.magento");
    }

    public void trace(String format, Object... arguments) {
        if (this.LOGGER.isTraceEnabled()) {
            if (!this.appendOnly) {
                this.LOGGER.trace(format, arguments);
            }

            this.formatAndAppend(format, arguments);
        }

    }

    public void debug(String format, Object... arguments) {
        if (this.LOGGER.isDebugEnabled()) {
            if (!this.appendOnly) {
                this.LOGGER.debug(format, arguments);
            }

            this.formatAndAppend(format, arguments);
        }

    }

    public void info(String format, Object... arguments) {
        if (this.LOGGER.isInfoEnabled()) {
            if (!this.appendOnly) {
                this.LOGGER.info(format, arguments);
            }

            this.formatAndAppend(format, arguments);
        }

    }

    public void warn(String format, Object... arguments) {
        if (this.LOGGER.isWarnEnabled()) {
            if (!this.appendOnly) {
                this.LOGGER.warn(format, arguments);
            }

            this.formatAndAppend(format, arguments);
        }

    }

    public void error(String format, Object... arguments) {
        if (this.LOGGER.isErrorEnabled()) {
            if (!this.appendOnly) {
                this.LOGGER.error(format, arguments);
            }

            this.formatAndAppend(format, arguments);
        }

    }

    private String getFormattedDate() {
        Date now = new Date();
        String dateText = this.dateFormatter.format(now);
        return dateText;
    }

    private void formatAndAppend(String format, Object... arguments) {
        if (this.appender != null) {
            FormattingTuple tp = MessageFormatter.arrayFormat(format, arguments);
            this.append(tp.getMessage());
        }
    }

    private void append(String message) {
        StringBuilder buf = new StringBuilder();
        buf.append(this.getFormattedDate()).append(' ').append(message).append('\n');
        this.appender.append(buf.toString());
    }
    //</editor-fold>

}
