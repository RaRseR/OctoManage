package database

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type dbConfig struct {
	host string
	port uint16
	name string
}

var config = dbConfig{"localhost", 27017, "projects"}

func getDatabaseUrl() string {
	return fmt.Sprintf(
		"mongodb://%s:%d",
		config.host, config.port)
}

func GetDatabase() (*mongo.Client, error) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(getDatabaseUrl()))

	if err == nil {
		return client, nil
	}

	return nil, err
}
