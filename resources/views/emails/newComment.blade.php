@component('mail::message')

    {{$request['comment_by']}} <p>  {{$request['comment']}} </p>


@component('mail::button', ['url' =>url($request['url'] )])
View Assets
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
