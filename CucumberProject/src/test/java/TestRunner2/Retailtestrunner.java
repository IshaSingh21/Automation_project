package TestRunner2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="src/test/java/feature"
,glue={"stepDefination2"},
dryRun =false,
monochrome=true,
tags= {"@test1,@test2,@test3,@test4,@test5"},
plugin= {"html:target/cucumber-pretty"}
)
public class Retailtestrunner {

}
