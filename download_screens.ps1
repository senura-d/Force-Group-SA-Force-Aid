$screens = @(
    @{
        name = "1_Home"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzlkYzRkNTcxODlkMzRlNjA4ZDg5MGM0NjZjZTkyYjI2EgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    },
    @{
        name = "2_Our_Projects"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Y3NWQ3MDFkMGNmMDQ4Y2E5ODExYzg0YWRkZWRmZmZjEgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    },
    @{
        name = "3_Our_Services"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzY3NzFlYjJkNDJjMDQ2NGY4YWM4YmFjODIzYzkzYTAyEgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    },
    @{
        name = "4_About_Us"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzI5NDRjMmM5YTI2NTRiZjM5ZGRhMTA2YWVlMTQwMGQ3EgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    },
    @{
        name = "5_Contact_Us"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2FiYTc4YWM5MDQ3ZjRjNmU4MzI1YzVhY2ZmNzVlZTdiEgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    },
    @{
        name = "6_Force_Aid_Inc"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQzOWRlMTBlMGNiMDRkOTViMDA1ZDExMTAwNjg3M2MwEgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    },
    @{
        name = "7_Admin_Dashboard"
        html = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2YwNDAwNzIwMTRiNGVhY2FhYWMxODZkNzc4MTFiODZhEgsSBxC_ssOk0gsYAZIBJAoKcHJvamVjdF9pZBIWQhQxMTAwODAyNDkzMjU0OTA3MTg0Ng&filename=&opi=89354086"
    }
)

foreach ($screen in $screens) {
    Write-Host "Downloading HTML for $($screen.name)..."
    Invoke-WebRequest -Uri $screen.html -OutFile "$($screen.name).html"
}

Write-Host "Done downloading HTML files."
