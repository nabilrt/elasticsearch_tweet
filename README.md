<h3><b>First make sure you have JAVA JDK installed in your pc for ElkStack to work.<b></h3>

Next step is to install all three Elasticsearch, Kibana and Logstash.

First install elastic search from the following link:
https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.4.2-windows-x86_64.zip

Next install Kibana it will help to visualize the data:
https://www.elastic.co/downloads/kibana

They both are zip files. Unzip them both and for convinience put them in a same root folder.
First go to elasticsearch folder/config and open the elasticsearch.yml file.
xpack.security.enabled: false //It should be true in that files from scratch, make it false.

Then go to the bin folder and open CMD There. Run "elasticsearch"

It should take some time to load all the cluster and after some time you can go to 127.0.0.1:9200 to test if it is working or not.

If everything goes alright, then you should be able to see black screen containing elasticsearch json file

Now Let us configure Kibana and add some records.

Go to Kibana Folder then into the bin open the CMD

Run "kibana"

As before, It will take some time to load and then you can go to the browser and type localhost:5601 to check kibana

Now let us install logstash

https://www.elastic.co/downloads/logstash go to this link and download the zip file.

Now unzip it. For running logstash from anywhere of your computer setup the environment variable.

Copy the bin folder directory for all Logstash,Kibana and Elastic search.

Go to environment variables then system variables then go to path. paste all the three paths as new.

Now to run the project clone the repository in your local machine

Run npm install

then Run both kibana and elasticsearch first.

After that go to the ElasticSearchLogstash folder and download the dataset from given text file and keep it
in that folder.

Configure the logstash.conf file. Instructions are given in comments.

After configuration run "logstash -f logstash.conf"

It will start to push your data to the index in elasticsearch which you defined in the config file

It will take some time and after that you can run the express app using node app.js

After that you can go to /search and search for the tweets
