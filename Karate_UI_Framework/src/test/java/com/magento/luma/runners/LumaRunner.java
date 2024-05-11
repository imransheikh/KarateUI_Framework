package com.magento.luma.runners;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import core.config.RunConfig;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class LumaRunner {

    @Test
    @Order(1)
    public void SelectedRunner(){
        Runner.Builder rb = Runner.builder();
        rb.path("classpath:com/magento/luma/scenarios");
        rb.tags("~@Ignore");
        Results result = rb.outputCucumberJson(true).parallel(RunConfig.getInstance().THREAD_COUNT());
    }


    @AfterAll
    public static void generateReport(){
        Collection<File> jsonFiles= FileUtils.listFiles(new File("target/Karate-report"), new String[]{"json"},true);
        List<String> jsonPaths = new ArrayList(jsonFiles.size());
        jsonFiles.forEach(file-> jsonPaths.add(file.getAbsolutePath()));
        Configuration config = new Configuration(new File("target"), "LumaProject");
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
        reportBuilder.generateReports();

    }


}
