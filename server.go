package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Contact struct {
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

func allowCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST,OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
}

func responseContact(w http.ResponseWriter, c Contact) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	if c.Email == "wingyminov@mail.com" {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(w, `{"test": "fail"}`)
		return
	}

	fmt.Fprint(w, `{"test": "success"}`)
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "OPTIONS":
		allowCORS(w)
	case "POST":
		var c Contact
		json.NewDecoder(r.Body).Decode(&c)
		responseContact(w, c)
		r.Body.Close()
	}
}

func main() {
	http.HandleFunc("/contact", contactHandler)
	http.ListenAndServe(":8080", nil)
}
