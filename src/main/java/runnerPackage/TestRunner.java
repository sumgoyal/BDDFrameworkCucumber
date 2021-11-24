package runnerPackage;

import org.junit.runner.RunWith;

import cucumber.api.*;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)


@CucumberOptions(
		features="C:\\Users\\hp\\eclipse-workspace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\deals.feature"
		,glue= {"stepDefination"},
		format= {"pretty", "html:test-output", "json:json_output\\cucumber.json", "junit:junit_xml\\cucumber.xml"},
		monochrome=true,
		strict=true,
		dryRun= false
		)

public class TestRunner {

}
