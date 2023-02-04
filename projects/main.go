package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	router := gin.Default()

	router.GET("/projects", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{"projects": []string{"1", "2"}})
	})

	if err := router.Run(":7001"); err != nil {
		return
	}
}
