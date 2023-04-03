
package main

import (
	"bytes"
	"fmt"
	"github.com/robfig/cron"
	"io"
	"net/http"
)

const (
	url1  = "https://api.juejin.cn/growth_api/v1/check_in"
	url2  = "https://api.juejin.cn/growth_api/v1/lottery/draw"
	cooke = "_tea_utm_cache_2608=undefined; _ga=GA1.2.710184367.1671685592; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227179834860289443361%2522%252C%2522user_unique_id%2522%253A%25227179834860289443361%2522%252C%2522timestamp%2522%253A1671685591897%257D; csrf_session_id=118768a0f9909fcfcc965393a4212d36; passport_csrf_token=5c0fc8f648d8c1b741384e7d44fea06c; passport_csrf_token_default=5c0fc8f648d8c1b741384e7d44fea06c; _tea_utm_cache_2018=undefined; odin_tt=cd201e13aa34bf323fdb3d72836cde7d13d9c928af204fec9b051f0ace1d6c272c447353206228ea4fd064173bc8db86dad781d38f85816909bca3689e6e56e5; n_mh=A6bCcNp1yItVTlH-TFi0pJP9TNmMOFaDCEGe7DokT_E; passport_auth_status=612daa776621d8f2d713fdd9cedbcd52%2C; passport_auth_status_ss=612daa776621d8f2d713fdd9cedbcd52%2C; sid_guard=0baf8c26c65c1ca1cd2256f06f350df5%7C1677217054%7C31536000%7CSat%2C+24-Feb-2024+05%3A37%3A34+GMT; uid_tt=5f466579f81a7295236872b99c86cabb; uid_tt_ss=5f466579f81a7295236872b99c86cabb; sid_tt=0baf8c26c65c1ca1cd2256f06f350df5; sessionid=0baf8c26c65c1ca1cd2256f06f350df5; sessionid_ss=0baf8c26c65c1ca1cd2256f06f350df5; sid_ucp_v1=1.0.0-KGNjMDQ3MTg2NDdhZjBjYjM5YTE2MWU5ZTJlNDVhNzM4MGIzMGY0MjIKFwjd97Cm-I2_BRCemuGfBhiwFDgCQOwHGgJsZiIgMGJhZjhjMjZjNjVjMWNhMWNkMjI1NmYwNmYzNTBkZjU; ssid_ucp_v1=1.0.0-KGNjMDQ3MTg2NDdhZjBjYjM5YTE2MWU5ZTJlNDVhNzM4MGIzMGY0MjIKFwjd97Cm-I2_BRCemuGfBhiwFDgCQOwHGgJsZiIgMGJhZjhjMjZjNjVjMWNhMWNkMjI1NmYwNmYzNTBkZjU; store-region=cn-fj; store-region-src=uid"
)

func send(url string) {
	// 准备请求体数据
	requestBody := []byte(`{"key": "value"}`)

	// 创建 POST 请求对象
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(requestBody))
	if err != nil {
		fmt.Println("Error creating HTTP request:", err)
		return
	}

	// 添加请求头信息
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer mytoken")
	req.Header.Set("Cookie", cooke)
	// 发送请求
	client := http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending HTTP request:", err)
		return
	}

	// 处理响应
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading HTTP response body:", err)
		return
	}
	fmt.Println("Response status code:", resp.StatusCode)
	fmt.Println("Response body:", string(body))
}

func Work() {
	c := cron.New()
	defer c.Start()
	_ = c.AddFunc("0 0 1 * * *", func() {
		send(url1) //签到
		send(url2) //抽奖
	})
}

func main() {
	////签到
	//send("https://api.juejin.cn/growth_api/v1/check_in")
	////抽奖
	//send("https://api.juejin.cn/growth_api/v1/lottery/draw")
	Work()
	select {}
}
